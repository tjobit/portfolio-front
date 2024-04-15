function Button(onClick, text, color, width) {
    const style = {
        button: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            borderRadius: '40px',
            width: width,
            backgroundColor: color,
        },
    }

    return (
        <div onClick={onClick} style={style.button}>
            {text}
        </div>
    );
}

export default Button;