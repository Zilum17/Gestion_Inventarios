function SwitchBtn({name,value, setValue, use}) {
  return (
    <div className="naveoq_activate-rop">
      <p>{name}</p>
      <a
        className="naveoq_activate-rop_switch"
        onClick={() => {
          if (!use) {
            value ? setValue(false) : setValue(true);
          }
        }}
      >
        <span
          className={"naveoq_activate-rop_switch_btn ".concat(
            value ? "switch_btn-tgl" : ""
          )}
        ></span>
      </a>
    </div>
  );
}

export default SwitchBtn;
