const Header = () => {
    return(
        <div className="app__header">
        <img className="logo"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png"
          alt="Instagram original logo"/> 
        <div className="h__right">
          <img className="mess"
          src="https://cdn-icons.flaticon.com/png/512/5728/premium/5728145.png?token=exp=1650393088~hmac=7f28843225e9524573c56caf7345573a"
          alt="messages icon"/>
          <img className="heart"
          src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
          alt="heart icon"/>
          <img className="plus"
          src="https://cdn-icons.flaticon.com/png/512/3161/premium/3161837.png?token=exp=1650393088~hmac=ab898ad62c1f901f7ea248d83e6f8719"
          alt="plus icon"/>
        </div>
      </div>
    )
};

export default Header;