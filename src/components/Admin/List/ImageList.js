import ListGuesser from "@api-platform/admin/lib/ListGuesser";
import {TextField, ImageField} from "react-admin";

const ImageList = (props) => (
    <ListGuesser {...props} title="Images">
        <TextField label="Titre" source="titre"></TextField>
    </ListGuesser>
);

export default ImageList;