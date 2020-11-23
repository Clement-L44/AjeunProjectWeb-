import ListGuesser from "@api-platform/admin/lib/ListGuesser";
import {TextField, EmailField} from "react-admin";

const UserList = (props) => (
    <ListGuesser {...props} title="Users">
        <TextField label="pseudo" source="pseudo"></TextField>
        <EmailField source="email"></EmailField>
        <TextField source="roles" label="role"></TextField>
    </ListGuesser>
);

export default UserList;