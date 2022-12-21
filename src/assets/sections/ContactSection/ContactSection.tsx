import React, { useState } from 'react';
import Section from '../../components/Section/Section';
import backgroundImg from '../../images/image_3.jpg';
import styles from './ContactSection.module.scss';
import cn from 'classnames';
import FormInput from '../../components/FormInput/FormInput';
import Button from '../../components/Button/Button';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);

  return (
    <Section
      className={cn(styles.section)}
      sx={{
        background: `url(${backgroundImg})`,
        backgroundSize: 'cover',
      }}
    >
      <div className={cn(styles.form)}>
        <h2>связаться с нами</h2>

        <FormInput
          label={'Имя'}
          placeholder={'Введите ваше имя'}
          useState={{
            state: name,
            setState: setName,
          }}
          type={'text'}
        />

        <FormInput
          label={'Email'}
          placeholder={'Введите ваш email'}
          useState={{
            state: email,
            setState: setEmail,
          }}
          type={'email'}
        />

        <FormInput
          label={'Сообщение'}
          useState={{
            state: message,
            setState: setMessage,
          }}
          type={'textarea'}
        />

        <Button className={cn(styles.button)}>отправить</Button>
      </div>

      <div className={cn(styles.contacts)}>
        <div className={cn(styles.block)}>
          <h3>ТЕЛЕФОН</h3>

          <p>1 (234) 567-890-12</p>
          <p>1 (234) 567-890-12</p>
        </div>

        <div className={cn(styles.block)}>
          <h3>Мы находимся</h3>

          <p>Ярославская область, г. Ярославль, п. Вакарево, д. 29</p>
        </div>

        <div className={cn(styles.block)}>
          <h3>НАШИ САМЫЕ ПОПУЛЯРНЫЕ УСЛУГИ</h3>

          <p>
            <b>Название услуги</b>
          </p>
          <p>
            <b>Название услуги</b>
          </p>
          <p>
            <b>Название услуги</b>
          </p>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
