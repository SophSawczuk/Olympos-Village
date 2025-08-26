import style from "../styles/PrivacyPolicy.module.css"


export default function PrivacyPolicy() {
    return (
        <div className={style.Wrapper}>
            <h1>Privacy Policy</h1>
            <p>Last updated: July 5, 2025</p>

            <p>
                We value your privacy and are committed to protecting the personal information you share with us.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
                We may collect basic information such as your name, email address, or other data you voluntarily submit through contact forms.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
                The information we collect is used solely to respond to your inquiries, provide relevant updates about our services, or improve the user experience.
            </p>

            <h2>3. Cookies</h2>
            <p>
                This website may use cookies to enhance navigation and analyze traffic. You can configure your browser to refuse all cookies if you prefer.
            </p>

            <h2>4. Third Parties</h2>
            <p>
                We do not share your personal information with third parties, except when necessary to respond to your request or comply with the law.
            </p>

            <h2>5. Security</h2>
            <p>
                We implement reasonable security measures to protect your personal data, although no system is completely secure.
            </p>

            <h2>6. Your Rights</h2>
            <p>
                You have the right to access, modify, or delete your personal data. You can contact us at any time to exercise these rights.
            </p>

            <h2>7. Changes to This Policy</h2>
            <p>
                We reserve the right to update this privacy policy at any time. We encourage you to review it periodically.
            </p>

            <h2>8. Contact</h2>
            <p>
                If you have any questions about this Privacy Policy, feel free to contact us at <strong>youremail@yourdomain.com</strong>.
            </p>
        </div>
    )
}