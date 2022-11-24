import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1>MenuFix</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImage} alt="A Table full of Delicious Food" />
            </div>
        </>
    )
}

export default Header