import React, { useState } from "react";
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import TextInput from "../../../../components/shared/TextInput/TextInput";
import styles from "../StepPhoneEmail.module.css";

const Email = () => {
  const [email, setEmail] = useState("");
  return (
    <Card title="E-Posta Adresi Giriniz" icon="email-emoji">
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="E-Posta"
      />
      <div>
        <div className={styles.actionButtonWrap}>
          <Button text="Sıradaki" />
        </div>

        <p className={styles.bottomParagraph}>
          Numaranızı girerek Hizmet Şartlarımızı ve Gizlilik Politikamızı kabul
          etmiş olursunuz. Teşekkürler!
        </p>
      </div>
    </Card>
  );
};

export default Email;
