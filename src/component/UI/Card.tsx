import classes from "./Card.module.scss";

export interface ChildrenProps {
  children: React.ReactNode;
  className?: string;
}

const Card = (props: ChildrenProps) => {
  return (
    <div className={`${classes.card} ${props.className}`}>
      <div className={classes["content-container"]}>{props.children}</div>
    </div>
  );
};

export default Card;
