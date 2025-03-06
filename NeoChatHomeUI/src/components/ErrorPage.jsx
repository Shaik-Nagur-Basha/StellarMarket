import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./ErrorPage.module.css";

export default function ErrorPage({
  code = "404",
  message = "Page not found",
}) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.errorContainer}>
      <div className={styles.glowingBackground}></div>
      <div className={styles.contentWrapper}>
        <div className={styles.errorCard}>
          <div className={styles.errorGraphic}>
            <div className={styles.glitchWrapper}>
              <div className={`${styles.glitchText} ${styles.glitchBase}`}>
                {code}
              </div>
              <div className={`${styles.glitchText} ${styles.glitchAnim1}`}>
                {code}
              </div>
              <div className={`${styles.glitchText} ${styles.glitchAnim2}`}>
                {code}
              </div>
            </div>
            <div className={styles.errorIcon}>
              <svg className={styles.cogIcon} viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.4 15C19.1277 15.8031 19.2583 16.6846 19.7601 17.3841C20.2619 18.0837 21.0809 18.5087 21.9 18.5C21.9685 19.0138 21.9XZ685 19.5362 21.9 20.06C21.8168 20.5822 21.6703 21.0937 21.46 21.58C20.6407 21.5912 19.8218 22.0163 19.3199 22.7158C18.8181 23.4153 18.6875 24.2968 18.96 25.1C18.4627 25.4108 17.9393 25.6648 17.4 25.86C16.8497 26.0565 16.2753 26.1904 15.69 26.26C15.2931 25.5267 14.6098 24.9976 13.8103 24.7958C13.0108 24.594 12.1698 24.736 11.4611 25.1929C10.7525 25.6498 10.2345 26.3829 10.0187 27.2291C9.80293 28.0752 9.90767 28.9699 10.31 29.74C9.77811 30.0161 9.22437 30.2358 8.65002 30.396C8.07123 30.5582 7.47559 30.6581 6.87502 30.694C6.47813 29.9607 5.79481 29.4316 4.99532 29.2298C4.19583 29.028 3.35482 29.17 2.64615 29.6269C1.93748 30.0838 1.41944 30.8169 1.20367 31.6631C0.987895 32.5092 1.09263 33.4039 1.49502 34.174C0.962633 34.4501 0.408893 34.6698 -0.164978 34.83C-0.743765 34.9922 -1.3394 35.0921 -1.93998 35.128C-2.33687 34.3947 -3.02019 33.8656 -3.81968 33.6638C-4.61917 33.462 -5.46018 33.604 -6.16885 34.0609C-6.87752 34.5178 -7.39556 35.2509 -7.61133 36.0971C-7.8271 36.9432 -7.72236 37.8379 -7.31998 38.608C-7.85736 38.8841 -8.4111 39.1038 -8.98498 39.264C-9.56376 39.4262 -10.1594 39.5261 -10.76 39.562C-11.1569 38.8287 -11.8402 38.2996 -12.6397 38.0978C-13.4392 37.896 -14.2802 38.038 -14.9888 38.4949C-15.6975 38.9518 -16.2156 39.6849 -16.4313 40.5311C-16.6471 41.3772 -16.5424 42.2719 -16.14 43.042C-16.6774 43.3181 -17.2311 43.5378 -17.805 43.698C-18.3837 43.8602 -18.9794 43.9601 -19.58 43.996C-19.9769 43.2627 -20.6602 42.7336 -21.4597 42.5318C-22.2592 42.33 -23.1002 42.472 -23.8088 42.9289C-24.5175 43.3858 -25.0356 44.1189 -25.2513 44.9651C-25.4671 45.8112 -25.3624 46.7059 -24.96 47.476C-25.4973 47.7521 -26.0511 47.9718 -26.625 48.132"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <svg
                className={styles.warningIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4301 17.3333 20.6603 16L13.7321 4C12.9623 2.66667 11.0378 2.66667 10.268 4L3.33978 16C2.56998 17.3333 3.53223 19 5.07183 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          <h1 className={styles.errorTitle}>{message}</h1>
          <p className={styles.errorDescription}>
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className={styles.actionButtons}>
            <button
              onClick={goBack}
              className={`${styles.button} ${styles.primaryButton}`}
            >
              <svg
                className={styles.buttonIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 12H5M5 12L12 19M5 12L12 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Go Back
            </button>
            <Link
              to="/"
              className={`${styles.button} ${styles.secondaryButton}`}
            >
              <svg
                className={styles.buttonIcon}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.5523 5.44772 21 6 21H9M19 10L21 12M19 10V20C19 20.5523 18.5523 21 18 21H15M9 21C9.55228 21 10 20.5523 10 20V16C10 15.4477 10.4477 15 11 15H13C13.5523 15 14 15.4477 14 16V20C14 20.5523 14.4477 21 15 21M9 21H15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Home
            </Link>
          </div>

          <div className={styles.backgroundDecoration}>
            <div className={styles.circle}></div>
            <div className={styles.dots}></div>
            <div className={styles.grid}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
