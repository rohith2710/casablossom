import AboutComponent from "@/components/about";
import Flower from "@/components/about/flower";
import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import styles from "../styles/about.module.scss";
import Link from "next/link";
export default function About() {
  return (
    <div>
      <Header />
      <main>
        <div className={styles.parent}>
          <div className={styles.div1}>
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
              <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4 fw-normal">Casa Blossom</h1>
                <p className="lead fw-normal">
                  Read below the to learn about the adventures that have lead to
                  us becoming the top store in Miami, or click to the button
                  continue shopping
                </p>
                <Link className="btn btn-outline-secondary" href="/browse">
                  Shop Now
                </Link>
              </div>
              <div className="product-device shadow-sm d-none d-md-block" />
              <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
            </div>
          </div>
          <div className={styles.div2}>
            <Flower />
          </div>
          <div className={styles.div3}>
            <AboutComponent />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
