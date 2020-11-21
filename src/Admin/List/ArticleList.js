import ListGuesser from "@api-platform/admin/lib/ListGuesser";
import FieldGuesser from "@api-platform/admin/lib/FieldGuesser";
import { ReferenceField, Filter, SearchInput, TextField, DateField, NumberField, BooleanField, TextInput } from "react-admin";
import { makeStyles, Chip } from '@material-ui/core';
import { Card as MuiCard, CardContent, withStyles } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOnOutlined';
import MailIcon from '@material-ui/icons/MailOutline';
import LocalOfferIcon from '@material-ui/icons/LocalOfferOutlined';
import { FilterList, FilterListItem } from 'react-admin';
import segments from '../segments/data';

const SegmentFilter = () => (
  <FilterList
      label="Segment"
      icon={<LocalOfferIcon />}
  >
      {segments.map(segment => (
          <FilterListItem
              label={segment.name}
              key={segment.id}
              value={{ groups: segment.id }}
          ></FilterListItem>
      ))}
  </FilterList>
);

const Card = withStyles(theme => ({
  root: {
    [theme.breakpoints.up('sm')] : {
      order: -1,
      width: '15em',
      marginRight: '1em',
    },
    [theme.breakpoints.down('sm')] : {
      display:'none',
    },
  },
}))(MuiCard);

const FilterSideBar = () => (
  <Card>
    <CardContent>
      <SegmentFilter></SegmentFilter>
    </CardContent>
  </Card>
);

const ArticleFilter = (props) => (
  <Filter {...props}>
    <SearchInput  source="titre" alwaysOn ></SearchInput>
  </Filter>
);

const ArticlesList = (props) => (
    <ListGuesser {...props} aside={<FilterSideBar></FilterSideBar>} filters={<ArticleFilter></ArticleFilter>} title="Articles">
      <TextField label="titre" source="titre"></TextField>
      <DateField label="Date" source="date"></DateField>
      <TextField label="Catégorie" source="categorie"></TextField>
      <NumberField label="Likes" source="Aime"></NumberField>
      <BooleanField label="Sondage" source="sondage"></BooleanField>
    </ListGuesser>
  );

  export default ArticlesList;