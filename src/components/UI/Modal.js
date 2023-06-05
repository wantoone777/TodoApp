import styles from './Modal.module.css'

function Modal() {
  return (
    <div
      className="modal fade"
      id="features"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className={`modal-title ${styles.title}`}
              id="exampleModalLabel"
            >
              Additional optional syntax is avaible
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className={`modal-body ${styles.body}`}>
            <p>
              There are some LVLs for your todos.{' '}
              <span className={`${styles.tiers}`}>
                <span className={styles.SColour}>S</span>,{' '}
                <span className={styles.AColour}>A</span>,{' '}
                <span className={styles.BColour}>B</span>
              </span>
            </p>
            <p>
              Syntax is simple. You should add{' '}
              <span className={styles.expression}>[ TODO ] # + [ Rangs ]</span>.
            </p>
            <p>
              For example:{' '}
              <span className={`${styles.expression} ${styles.example}`}>
                Drink 7 glasses of water today#S
              </span>
              . It means you will get new Todo with highest rating: S.
            </p>
            <p className={styles.paletteContainer}>
              Palette: S -{' '}
              <span
                className={`${styles.examplePallete} ${styles.SColourBg}`}
              ></span>{' '}
              A -{' '}
              <span
                className={`${styles.examplePallete} ${styles.AColourBg}`}
              ></span>{' '}
              B -{' '}
              <span
                className={`${styles.examplePallete} ${styles.BColourBg}`}
              ></span>{' '}
            </p>
            <p>
              You can create Todos without this syntax. Default settings will be
              next: Importance - Standard, Colour -{' '}
              <span
                className={`${styles.examplePallete} ${styles.DefaultColourBg}`}
              ></span>
            </p>
            {/*<p style={ {"textAlign": "center", "fontSize": "20px", "marginTop": "30px", "color": "#5E6B61"} }>Let's try it!</p>*/}
          </div>
          <div className={`modal-footer ${styles.footer}`}>
            <button
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
            >
              Let's try it!
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
