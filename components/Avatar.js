const Avatar = (props) => {
    return (
        <img loading='lazy' src={props.url} alt='Profile Picture' className={`avatar ${props.className}`}/>
    )
}

export default Avatar
