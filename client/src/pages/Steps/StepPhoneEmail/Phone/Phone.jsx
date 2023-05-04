import React, { useState } from "react";
import Card from "../../../../components/shared/Card/Card";
import Button from "../../../../components/shared/Button/Button";
import TextInput from "../../../../components/shared/TextInput/TextInput";
import styles from "../StepPhoneEmail.module.css"

const Phone = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <Card title="Numaranızı Giriniz" icon="phone">
      <TextInput
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        type="tel"
        placeholder="Telefon Numarası"
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

export default Phone;
