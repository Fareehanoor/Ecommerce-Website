import styled from "styled-components";

const Contact = () => {
  return (
    <>
      <Wrapper>
        <h2 className="common-heading">Contact</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54575.06828005607!2d74.14786360828545!3d31.250035332456097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918532aa60b7a31%3A0x7908cbc12a8da7af!2sRaiwind%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1739036066211!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="container">
          <div className="contact-form">
            <form action="" method="POST" className="contact-inputs">
              <input
                type="text"
                placeholder="Username"
                name="username"
                required
                autoComplete="off"
              />
              <input
                type="email"
                placeholder="Useremail"
                name="useremail"
                required
                autoComplete="off"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                cols="20"
                rows="20"
                required
                autoComplete="off"
              ></textarea>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;

  .container {
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;

export default Contact;
