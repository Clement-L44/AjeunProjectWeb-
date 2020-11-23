import React from "react";
import { Redirect, Route } from "react-router-dom";
import { HydraAdmin, fetchHydra as baseFetchHydra, hydraDataProvider as baseHydraDataProvider } from "@api-platform/admin";
import parseHydraDocumentation from "@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation";
import authProvider from './services/authProvider';
import ArticlesList from './components/Admin/List/ArticleList';
import ResourceGuesser from "@api-platform/admin/lib/ResourceGuesser";
import SondagesList from "./components/Admin/List/SondagesList";
import ImageList from "./components/Admin/List/ImageList";
import TypeList from "./components/Admin/List/TypeList";
import CategorieList from "./components/Admin/List/CategorieList";
import UserList from "./components/Admin/List/UserList";
import Dashboard from "./components/Admin/DashBoard/Dashboard";
import NotFound from "./components/Admin/NotFound";

const entrypoint = "http://127.0.0.1:8000/api";

const fetchHeaders = () => ({
  Authorization: `Bearer ${window.localStorage.getItem("token")}`,
});

const fetchHydra = (url, options = {}) =>
  localStorage.getItem("token")
    ?baseFetchHydra(url, {
      ...options,
      headers : new Headers(fetchHeaders()),
    })
    :baseFetchHydra(url, options);
const apiDocumentationParser = (entrypoint) =>
    parseHydraDocumentation(
      entrypoint,
      localStorage.getItem("token")
      ? { headers: new Headers(fetchHeaders())}
      : {}
    ).then(
      ({api}) => ({api}),
      (result) => {
        if(result.status === 401) {
          localStorage.removeItem("token");
          return Promise.resolve({
            api: result.api,
            customRoutes: [
              <Route path="/" render={() => {
                return localStorage.getItem("token") ? window.location.reload() : <Redirect to="/login"></Redirect>
              }}></Route>
            ],
          });
        }
        return Promise.reject(result);
      },
    );
const dataProvider = baseHydraDataProvider(entrypoint, fetchHydra, apiDocumentationParser);

const httpClient = (url, options = {}) => {
  if(!options.headers) {
    options.headers = new Headers({Accept : 'application/json'});
  }
  const token = localStorage.getItem('token');
}

export default () => (
  <HydraAdmin catchAll={NotFound} dashboard={Dashboard} authProvider={authProvider} dataProvider= { dataProvider } entrypoint = { entrypoint }>
      <ResourceGuesser name="articles" list={ArticlesList}></ResourceGuesser>
      <ResourceGuesser name="sondages" list={SondagesList}></ResourceGuesser>   
      <ResourceGuesser name="images" list={ImageList}></ResourceGuesser>
      <ResourceGuesser name="types" list={TypeList}></ResourceGuesser>
      <ResourceGuesser name="categories" list={CategorieList}></ResourceGuesser>
      <ResourceGuesser name="users" list={UserList}></ResourceGuesser>
  </HydraAdmin>
);