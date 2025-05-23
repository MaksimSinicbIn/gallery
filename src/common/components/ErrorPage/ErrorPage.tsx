import wrongDoor from '@/assets/images/wrongDoor.webp'

export const ErrorPage = () => {
  return (
    <div aria-labelledby='error-title error-description' className='error-page'>
      <div style={{ marginTop: '10%', textAlign: 'center' }}>
        <h2 id='section-error'>Oops!</h2>
        <p id='section-error'>You got the wrong door, buddy!</p>
        <img style={{ paddingTop: '2%' }} src={wrongDoor} alt='drujok_pirojok' />
        <p style={{ paddingTop: '2%', fontSize: '18px' }}>
          Try click{' '}
          <a href={'http://localhost:5173'} target={'_blank'}>
            <span style={{ color: 'violet' }}>here!</span>
          </a>
        </p>
      </div>
    </div>
  )
}
