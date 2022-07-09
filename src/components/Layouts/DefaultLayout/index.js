import Header from "~/components/Layouts/DefaultLayout/Header";
import Sidebar from "./Sidebar";
import styles from './DefaultLayout.module.scss'

function DefaultLayout({children}) {
    return (
        <div>
            <Header />
            <div className={styles.container}>
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;