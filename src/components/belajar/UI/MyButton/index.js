import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    myButton : {
        margin: 30
    }
});
const MyButton = () => {
    const classes = useStyles();

  return (
    <>
      <div className={classes.myButton}>
        <Button variant={"outlined"} color={"primary"}>
          SEND
        </Button>
      </div>
    </>
  );
};
export default MyButton;
