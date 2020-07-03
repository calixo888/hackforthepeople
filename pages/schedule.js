import Layout from '../components/Layout.js';
import ReactScrollTable from 'react-scroll-table';

var tableProps = {
  backgroundColor: '#BCE0FD',
  columns: [
    {
      header: 'Events',
      sortable: false,
      accessor: 'event',
      width: '30%',
    },
    {
      header: 'Time',
      accessor: 'time',
      width: '30%',
      sortable: true,
    },
    {
      header: 'Link/Location',
      sortable: true,
      accessor: 'link',
      width: '30%',
    },
    {
      header: 'Tag',
      sortable: true,
      accessor: 'tag',
      width: '10%'
    }
  ],
  data: [{event: "Welcoming Zoom Ceremony", time: '10AM-10:30AM', link: 'zoom.us/249834', tag: 'tag'},],
  downIcon: <i className="fa fa-down"/>,
  maxHeight: 150,
  noDataText: 'no data here',
  shaded: true,
  shadedColor: '#DDEFFF',
  textColor: '#004F98',
  upIcon: <i className="fa fa-up"/>
};

export default () => {
  return (
    <Layout>
      <section className="about">
        <div className="container">
          <div className="about-grid">
            <div className="image" style={{ height: "300px", width: "400px" }}></div>
            <div>
              <h1>Schedule</h1>
              <ReactScrollTable {...tableProps} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
