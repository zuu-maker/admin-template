import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  {
    id: 112,
    product: "Mackbook pro",
    img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481",
    customer: "Jon snow",
    date: "1 March",
    amount: 2000,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 111,
    product: "Surface laptop",
    img: "https://m.media-amazon.com/images/I/514EGD+WtsL._AC_UF894,1000_QL80_.jpg",
    customer: "Jon smith",
    date: "4 March",
    amount: 1600,
    method: "Cash on Delivery",
    status: "Pending",
  },
];

function TableComponent() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="">Tracking ID</TableCell>
            <TableCell className="">Product</TableCell>
            <TableCell className="">Customer</TableCell>
            <TableCell className="">Date</TableCell>
            <TableCell className="">Amount</TableCell>
            <TableCell className="">Payment Method</TableCell>
            <TableCell className="">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell className="">
                <div className="flex items-center">
                  <img
                    className="h-14 w-14 
                   mr-2"
                    src={row.img}
                    alt=""
                  />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="">{row.customer}</TableCell>
              <TableCell className="">{row.date}</TableCell>
              <TableCell className="">{row.amount}</TableCell>
              <TableCell className="">{row.method}</TableCell>
              <TableCell className="">
                <span
                  className={`${
                    row.status === "Approved"
                      ? "text-green-500 bg-green-100"
                      : "text-yellow-500 bg-yellow-100"
                  } p-1 rounded-md`}
                >
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
