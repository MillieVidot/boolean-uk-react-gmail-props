import '../../styles/email_styles.css'
import Email from './Email'

function EmailsList(props) {
  return (
    <main className="emails">
      <ul>
        {props.filteredEmails.map((email, index) => (
          <Email
            key={index}
            email={email}
            toggleRead={props.toggleRead}
            toggleStar={props.toggleStar}
          />
        ))}
      </ul>
    </main>
  )
}

export default EmailsList
