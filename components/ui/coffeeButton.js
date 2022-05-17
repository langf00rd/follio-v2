const CoffeeButton = ({ username }) => {
    return (
        <a href={`https://www.buymeacoffee.com/${username}`}>
            <img alt='buy me a coffee' className="hover:scale-90 transition" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" width="200" />
        </a>
    )
}

export default CoffeeButton;