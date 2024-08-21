import classes from './EmptyState.module.scss';

function EmptyState() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      x="0"
      y="0"
      enableBackground="new 0 0 424.93 419.87"
      width="100%"
      version="1.1"
      viewBox="0 0 424.93 419.87"
      xmlSpace="preserve"
    >
      <style></style>
      <circle cx="154.75" cy="152.22" r="88.63" className={`${classes.line} ${classes.anim}`}></circle>
      <circle cx="154.75" cy="152.22" r="125.34" className={`${classes.line} ${classes.anim}`}></circle>
      <path
        d="M305.29 250.4H349.32000000000005V399.14H305.29z"
        className={`${classes.line} ${classes.anim}`}
        transform="rotate(-45.001 327.306 324.78)"
      ></path>
      <path d="M274.72 272.19L243.38 240.85" className={`${classes.line} ${classes.anim}`}></path>
      <path
        d="M123.49 128.34c0-17.42 14.24-31.51 31.71-31.26 16.84.23 30.58 13.98 30.82 30.82.17 12.23-6.68 22.88-16.78 28.16-8.82 4.62-14.48 13.6-14.48 23.55v16.57"
        className={`${classes.line} ${classes.anim}`}
      ></path>
      <path d="M154.75 212.91L154.75 214.39" className={classes.liner}></path>
    </svg>
  );
}

export default EmptyState;
