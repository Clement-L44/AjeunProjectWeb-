import ListGuesser from "@api-platform/admin/lib/ListGuesser";
import {TextField, ImageField} from "react-admin";

const TypeList = (props) => (
    <ListGuesser {...props} title="Types">
        <TextField label="titre" source="libelle"></TextField>
    </ListGuesser>
);

export default TypeList;