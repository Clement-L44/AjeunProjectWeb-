import ListGuesser from "@api-platform/admin/lib/ListGuesser";
import {TextField, NumberField} from "react-admin";

const CategorieList = (props) => (
    <ListGuesser {...props} title="Categories">
        <TextField label="Titre" source="libelle"></TextField>
        <NumberField label="Likes" source="aime"></NumberField>
    </ListGuesser>
);

export default CategorieList;