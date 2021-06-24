import "../../styles/button/button.css";

const Button = (props) => {
    return <div className = "button" 
                style = {{
                            background: props.bgcolor, 
                            height: props.height, 
                            lineHeight: props.height, 
                            width: props.width, 
                            color: props.color, 
                            float: props.position}
                        }
                onClick = {props.handleClick}            
            >
        {props.content}
    </div>
}

export default Button;