const {
  PagingState,
  SortingState,
  FilteringState,
  GroupingState,
  EditingState,
  SelectionState,
  RowDetailState,
  IntegratedSorting,
  IntegratedFiltering,
  IntegratedPaging,
  IntegratedGrouping,
  IntegratedSelection } =
DevExpress.DXReactGrid;

const {
  Grid,
  Table,
  TableHeaderRow,
  TableFilterRow,
  TableSelection,
  PagingPanel,
  GroupingPanel,
  TableGroupRow,
  TableEditRow,
  TableEditColumn,
  TableRowDetail,
  DragDropProvider,
  TableColumnReordering,
  TableColumnVisibility,
  ColumnChooser,
  Toolbar } =
DevExpress.DXReactGridBootstrap3;


const CustomTableRowDetail = ({ row }) => /*#__PURE__*/
React.createElement("div", null, "Details about '", row.name, "' by ", row.artist);

class App extends React.PureComponent {
  render() {
    const { rows, columns } = this.state;

    return /*#__PURE__*/(
      React.createElement(Grid, { rows: rows, columns: columns, getRowId: this.getRowId }, /*#__PURE__*/
      React.createElement(SortingState, {
        defaultSorting: [{ columnName: "name", direction: "asc" }] }), /*#__PURE__*/

      React.createElement(PagingState, null), /*#__PURE__*/
      React.createElement(FilteringState, null), /*#__PURE__*/
      React.createElement(SelectionState, null), /*#__PURE__*/
      React.createElement(GroupingState, null), /*#__PURE__*/
      React.createElement(EditingState, { onCommitChanges: this.commitChanges }), /*#__PURE__*/
      React.createElement(RowDetailState, null), /*#__PURE__*/
      React.createElement(IntegratedSorting, null), /*#__PURE__*/
      React.createElement(IntegratedFiltering, null), /*#__PURE__*/
      React.createElement(IntegratedGrouping, null), /*#__PURE__*/
      React.createElement(IntegratedPaging, null), /*#__PURE__*/
      React.createElement(IntegratedSelection, null), /*#__PURE__*/
      React.createElement(DragDropProvider, null), /*#__PURE__*/
      React.createElement(Table, null), /*#__PURE__*/
      React.createElement(TableColumnReordering, { defaultOrder: ["name", "artist", "year"] }), /*#__PURE__*/
      React.createElement(TableColumnVisibility, null), /*#__PURE__*/
      React.createElement(TableHeaderRow, { showSortingControls: true, showGroupingControls: true }), /*#__PURE__*/
      React.createElement(TableFilterRow, null), /*#__PURE__*/
      React.createElement(TableSelection, { highlightRow: true }), /*#__PURE__*/
      React.createElement(TableEditRow, null), /*#__PURE__*/
      React.createElement(TableEditColumn, { showAddCommand: true, showEditCommand: true, showDeleteCommand: true }), /*#__PURE__*/
      React.createElement(TableRowDetail, { contentComponent: CustomTableRowDetail }), /*#__PURE__*/
      React.createElement(PagingPanel, { pageSizes: [0, 5, 10, 20] }), /*#__PURE__*/
      React.createElement(TableGroupRow, null), /*#__PURE__*/
      React.createElement(Toolbar, null), /*#__PURE__*/
      React.createElement(GroupingPanel, { showSortingControls: true, showGroupingControls: true }), /*#__PURE__*/
      React.createElement(ColumnChooser, null)));


  }

  getRowId(row) {
    return row.id;
  }

  commitChanges({ added, changed, deleted }) {
    const rowById = id => _.find(this.state.rows, r => r.id === parseInt(id));
    if (changed) {
      for (let id in changed) {
        const changedRow = rowById(id);
        const otherRows = _.without(this.state.rows, changedRow);

        this.setState({
          rows: [
          ...otherRows,
          {
            ...changedRow,
            ...changed[id] }] });



      }
    }
    if (deleted) {
      for (let id of deleted) {
        const deletedRow = rowById(id);
        this.setState({
          rows: _.without(this.state.rows, deletedRow) });

      }
    }
    if (added) {
      let largestId = this.state.rows.reduce((r, v) => v.id > r ? v.id : r, 0);
      for (let newObject of added)
      this.setState({
        rows: [
        ...this.state.rows,
        {
          ...newObject,
          id: ++largestId }] });



    }
  }

  constructor(props) {
    super(props);

    this.commitChanges = this.commitChanges.bind(this);

    this.state = {
      columns: [
      { name: "name", title: "Name" },
      { name: "artist", title: "Artist" },
      { name: "year", title: "Year" }],

      rows: [
      {
        id: 1,
        name: "Their Satanic Majesties Request",
        artist: "The Rolling Stones",
        year: 1967 },

      { id: 2, name: "Prime Cuts", artist: "David Bowie", year: 1983 },
      { id: 3, name: "Human", artist: "Rag'n'Bone Man", year: 2017 },
      { id: 4, name: "Kill 'Em All", artist: "Metallica", year: 1983 },
      {
        id: 5,
        name: "Colour by Numbers",
        artist: "Culture Club",
        year: 1983 },

      {
        id: 6,
        name: "Born in the U.S.A.",
        artist: "Bruce Springsteen",
        year: 1984 },

      { id: 7, name: "Disraeli Gears", artist: "Cream", year: 1967 },
      {
        id: 8,
        name: "Between the Buttons",
        artist: "The Rolling Stones",
        year: 1967 },

      {
        id: 9,
        name: "Sgt. Pepper's Lonely Hearts Club Band",
        artist: "The Beatles",
        year: 1967 },

      {
        id: 10,
        name: "The Battle of Los Angeles",
        artist: "Rage Against the Machine",
        year: 1999 },

      { id: 11, name: "The Slim Shady LP", artist: "Eminem", year: 1999 }] };


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));