const Alarm = (props) => {
    const {errors} = props;
    return <div className = "alarm">
        {errors.map((err)=>{
            return <div className = "item">{err}</div>
        })}
    </div>
}