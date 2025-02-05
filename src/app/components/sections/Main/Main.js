'use client';

import dynamic from 'next/dynamic';
import styles from './Main.module.css';

const ChatComponent = dynamic(() => import('../Codestral/ChatComponent'), {
    ssr: false,
});

const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.contentWrapper}>
                <section className={styles.chatSection}>
                    <div className={styles.chatWrapper}>
                        <ChatComponent />
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Main;
