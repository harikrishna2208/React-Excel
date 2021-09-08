import React, { useState } from "react";
import "./Welcome.css";
import XLSX from "xlsx";

const WelcomePage = () => {
  const [rowData, setrowData] = useState([]);
  const [ColData, setColData] = useState([]);
  const [BackToExcel, setBackToExcel] = useState({});
  const [loaded, setLoaded] = useState(false);

  function FileRead(event) {
    var file = event.target.files;
    handleFile(file[0]);
  }

  function handleFile(file /*:File*/) {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    reader.onload = (e) => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[1];
      const ws = wb.Sheets[wsname];

      // console.log(wb.SheetNames)

      // const wsname2 = wb.SheetNames[2]; //second worksheet name
      // const ws2 = wb.Sheets[wsname]; //Second

      // console.log(rABS, wb);

      /* Convert array of arrays */
      // checkHTML=XLSX.utils.sheet_to_html(ws,{ header: 0 }); for html export purpose
      const Data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      const Back = XLSX.utils.json_to_sheet(Data, {
        header: ["0", "1", "2", "3"],
      });
      setBackToExcel(Back);
      /* Update state */

      setrowData(Data);
      setColData(make_cols(ws["!ref"]));
    };
    if (rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
    setLoaded(true);
  }

  const make_cols = (refstr) => {
    let o = [],
      C = XLSX.utils.decode_range(refstr).e.c + 1;
    for (var i = 0; i < C; ++i)
      o[i] = { name: XLSX.utils.encode_col(i), key: i };
    return o;
  };

  function exportToExcel($event) {
    const fileName = "BacktoExcel.xlsx";
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, BackToExcel, "test");
    XLSX.writeFile(wb, fileName);
  }

  return (
    <>
      <div id="import">
        <input
          id="importExcelBtn"
          type="file"
          onChange={FileRead}
          name="Import"
        />
        {loaded && (
          <button id="exportExcelBtn" onClick={exportToExcel} name="Import">
            Export To Excel
          </button>
        )}
      </div>

      {!loaded ? (
        <h1 id="Select">Select Some File</h1>
      ) : (
        <div id="Welcomecontent">
          <div id="content">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    {ColData.map((c) => (
                      <th key={c.key}>{c.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rowData.map((r, i) => (
                    <tr key={i}>
                      {ColData.map((c) => (
                        <td key={c.key}>{r[c.key]}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomePage;
