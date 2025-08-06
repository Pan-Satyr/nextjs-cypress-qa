'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required.';
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      newErrors.email = 'Valid email is required.';
    if (!formData.message.trim()) newErrors.message = 'Message is required.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className={styles.container} data-testid="contact-container">
      <h1 className={styles.title} data-testid="contact-heading">
        Let's Keep in Touch
      </h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="Contact Illustration"
            fill={true}
            className={styles.image}
            data-testid="contact-image"
          />
        </div>
        <form
          className={styles.form}
          onSubmit={handleSubmit}
          data-testid="contact-form"
        >
          <input
            type="text"
            name="name"
            placeholder="name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            data-testid="contact-input-name"
          />
          {errors.name && (
            <span data-testid="contact-error-name">{errors.name}</span>
          )}

          <input
            type="text"
            name="email"
            placeholder="email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            data-testid="contact-input-email"
          />
          {errors.email && (
            <span data-testid="contact-error-email">{errors.email}</span>
          )}

          <textarea
            name="message"
            className={styles.textArea}
            placeholder="message"
            cols="30"
            rows="10"
            value={formData.message}
            onChange={handleChange}
            data-testid="contact-input-message"
          />
          {errors.message && (
            <span data-testid="contact-error-message">{errors.message}</span>
          )}

          <button
            type="submit"
            className={styles.button}
            data-testid="contact-submit-button"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
