import { Colors } from '../../assets/color';

const style = {
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Colors.secondary,
      width: "35vw",
      height: "100%",
    },
    projectContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      height: "100%",
      overflowY: "scroll",
    },
  };

function UserSelector() {

    return (
        <div style={style.main}>
            <div style={style.projectContainer}>
            </div>
        
        </div>
    );
}

export default UserSelector;