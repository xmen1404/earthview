import "../../styles/button/button.css";

const Button = (props) => {

    const styles = {

    }

    if(props.bgcolor) styles.background = props.bgcolor;
    if(props.height) {
        styles.height = props.height;
        styles.lineHeight = props.height;
    }
    
    if(props.width) styles.width = props.width;
    if(props.color) styles.color = props.color;
    if(props.position) styles.float = props.position;
    if(props.margin) styles.margin = props.margin;
    if(props.marginLeft) styles.marginLeft = props.marginLeft;
    if(props.marginRight) styles.marginRight = props.marginRight;
    if(props.marginTop) styles.marginTop = props.marginTop;
    if(props.marginBottom) styles.marginBottom = props.marginBottom;
    if(props.padding) styles.padding = props.padding;
    if(props.paddingLeft) styles.paddingLeft = props.paddingLeft;
    if(props.paddingRight) styles.paddingRight = props.paddingRight;
    if(props.paddingTop) styles.paddingTop = props.paddingTop;
    if(props.paddingBottom) styles.paddingBottom = props.paddingBottom;
    if(props.border) styles.border = props.border;
    // if(props.borderRadius) styles.borderRadius = props.borderRadius;

    // console.log("debug style", styles);

    return <div className = "button" 
                style = {styles}
                onClick = {props.handleClick}            
            >
        {props.content}
    </div>
}

export default Button;