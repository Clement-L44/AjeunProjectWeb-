import ListGuesser from "@api-platform/admin/lib/ListGuesser";
import {Filter, SearchInput, TextField, DateField, NumberField, BooleanField } from "react-admin";


const ArticleFilter = (props) => (
  <Filter {...props}>
    <SearchInput  source="titre" alwaysOn ></SearchInput>
  </Filter>
);

const ArticlesList = (props) => (
    <ListGuesser {...props} filters={<ArticleFilter></ArticleFilter>} title="Articles">
      <TextField label="titre" source="titre"></TextField>
      <DateField label="Date" source="date"></DateField>
      <TextField label="Catégorie" source="categorie"></TextField>
      <NumberField label="Likes" source="Aime"></NumberField>
      <BooleanField label="Sondage" source="sondage"></BooleanField>
    </ListGuesser>
  );

  export default ArticlesList;