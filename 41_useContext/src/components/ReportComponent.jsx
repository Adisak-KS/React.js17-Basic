import { useContext } from "react";
import DataContext from "../data/dataContext";


const ReportComponent = () => {
    const name = useContext(DataContext)
  return <div>
    สวัสดี : {name}
    </div>;
};

export default ReportComponent;
