const FormComponent = () => {
  return (
    <div>
      <form action="">
        <div className="form-control">
          <label>ชื่อรายการ</label>
          <input type="text" placeholder="ระบุชื่อรายการของคุณ" />
        </div>
        <div className="form-control">
          <label>จำนวนเงิน</label>
          <input type="number" placeholder="ระบุจำนวนเงินของคุณ" />
        </div>
        <div className="form-control">
          <button type="submit">เพิ่มข้อมูล</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
