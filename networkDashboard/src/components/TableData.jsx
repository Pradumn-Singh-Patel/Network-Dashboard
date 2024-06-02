/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const TableData = ({ rows }) => {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>Timestamp</th>
          <th>Source IP</th>
          <th>Source Port</th>
          <th>Destination IP</th>
          <th>Destination Port</th>
          <th>Signature</th>
          <th>Category</th>
          <th>Severity</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((data, index) => (
          <tr key={index}>
            <td>{data.timestamp}</td>
            <td>{data.src_ip}</td>
            <td>{data.src_port}</td>
            <td>{data.dest_ip}</td>
            <td>{data.dest_port}</td>
            <td>{data.alert.signature}</td>
            <td>{data.alert.category}</td>
            <td>{data.alert.severity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;