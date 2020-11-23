import ListGuesser from "@api-platform/admin/lib/ListGuesser";
import { TextField, NumberField, ReferenceManyField, SingleFieldList, ChipField } from "react-admin";


const SondagesList = (props) => (
    <ListGuesser {...props} title="Sondages">
        <TextField label="Titre" source="titre"></TextField>
        <NumberField label="Participations" source="nbr_votes"></NumberField>
     {/*<ReferenceManyField label="Réponse" reference="sondage" target="sondage_id">
            <SingleFieldList>
                <TextField source="libelle"></TextField>
            </SingleFieldList>
        </ReferenceManyField>*/}
    </ListGuesser>
);

export default SondagesList;