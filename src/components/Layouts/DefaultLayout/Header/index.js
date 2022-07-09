import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faDroplet, faFloppyDisk, faKeyboard, faMagnifyingGlass, faFlag, faGear } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import { faHdd } from '@fortawesome/free-regular-svg-icons';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.leftNav}>
                <Link to='/'>Snipe-IT Asset Management</Link>
            </div>
            <div className={styles.rightNav}>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faBarcode} />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faFloppyDisk} />
                    </li>
                    <li><FontAwesomeIcon icon={faKeyboard} /></li>
                    <li><FontAwesomeIcon icon={faDroplet} /></li>
                    <li><FontAwesomeIcon icon={faHdd} /></li>
                    <li className={styles.search}>
                        <input placeholder='Tra cứu theo thẻ nội dung' className={styles.inputTag}></input>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </li>
                    <li className={styles.taoMoi}>
                        <Link to="/taomoi">Tạo mới</Link>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faFlag} />
                    </li>
                    <li className={styles.userMenu}>
                        <img src='http://snipeit.qltbyt.com/img/default-sm.png' alt='ảnh mặt cười'></img>
                        <span>Vượng</span>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faGear} />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;