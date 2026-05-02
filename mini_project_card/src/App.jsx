import React from 'react'
import { Bookmark } from 'lucide-react';

const App = () => {
  return (
    <div className='parent'>
      <div className='card'>
        <div>
        <div className='top'>
          <img src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIIA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcEBQgCAQP/xAA/EAABAwMBBAcEBQsFAAAAAAABAAIDBAURBgcSITETQVFhcYGRCCJSoRQyQmLBIzM2U3J1grGz0fAVkpOi4f/EABoBAQACAwEAAAAAAAAAAAAAAAACBAMFBgH/xAAvEQEAAgEBBQYDCQAAAAAAAAAAAQIDBAURITFREhMiQWHhBkLRFBUyM5GhscHw/9oADAMBAAIRAxEAPwC8UREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARFjXG4Udro5Ky41MVNTRjL5ZXhrR5lBkoqg1Ft4tNJI6Kw26a4EHHTzO6GM94GC4+YaoXV7c9WTOPQQ22nbngGQOcQPFzig6TRcxx7a9ZMdl09FIPhdTDHywpDZdvtcx7W3yzU80ZPGSjeY3AfsuJz6hBfaKOaR1tYtXQF9oq8zMbmSmlG5LH4t6xx5jI71I0BERAREQEREBERAREQEREBERAREQEREBERAREQYd3udJZrZU3K4SiOmpozJI7uHUO0nkB1krlDXutrlrO6Onq3ujo2OP0akDvcib+Lu0/hwVre0fe5Ke12yywuwKqR082DzazAaD3Ekn+EKgUBFttLWGr1NfqS0UOBLUOwXuHBjRxc49wAK6Z07su0nZKRkTrVBXzY9+etYJS8+B4DyCDlBF1dqbZfpa+0MkMdsp7fUYPR1FFEIyx3aWjAcO4/JcuXa3z2q51duq2htRSyuikA5ZacHHcg822vq7XXQ11vqH09VA7ejlYcFp/zq611js31YzWOmILiQ1lUw9DVRt5NkAGSO4ggjxx1LkVXP7Nde5l2vNuLjuy07Jw3qBY7dJ/7j0QX4iIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiII7qzRVh1b0Dr3SOlkgBEcjJHMc0HmOB4jh1qG1WwfS8ri6CtukGeTRKxzR6sz81ai0OqtYWPSdOJbzWtje4ZjgYN6WTwb+JwO9BodA7L7bou61Fxp62oq55IuiZ0rQBG0kE8uZ4Dip4qFvu32se9zLDZ4YWZ4S1jy9xH7LcAHzKh1dta1tWPcf9ZMDDyZBDGwDzxn5oOq1ybtgaG7SL4AMflWH1jatTU6v1LVEmo1BdH56jWSY9M4WnmlknkdJNI6SR3Fz3nJPiUHhWp7OX6c1n7sk/qRKq1ans5/pzV/u2T+pGg6PREQEREBERAREQEREBERAREQEREBERAREQETkvG/l2BywgiW07WsWi7B9IYGSXCoJjpIXHgXdbj91uR5kDhnK5WudxrLtXzV1yqZKmqmdvSSyHJJ/Adg5BTrbjdZrtr+qpmkmCgjbBGM8OW8493vOIz3BV90T9/c3TvIPCnejdlWotUwR1jWR0NBJgsqKkkGQdrWjifE4B7VjbKtORah1vRUddGH0kQdUTsPEPa3kO8F26D3ZXV7SwANbgAcAB1IKao/Z/oGsH06/VMr+voYGsHzJVQ65scOnNWXCz0ssksVM9rWvkxvHLQeOPFdiEgcyuUtqEoftKvNQzde1lSAQCM+60A8PJBDXxSRgGSNzQeW8MZVo+zn+nNX+7ZP6karyreHR9E1pLnAOzjAA7f8AO1WJ7OzHR65q98YzbZMf8kaDo5F83hnGeK+oCIiAiIgIiICIiAiIgIiICIiAiIgIiIPLxlvBfnuk8d3HBfsiDkbW73x691CKknf/ANRmLd4/Z33bo9CFoy9gkOXj3hgcvd+ffnxCnO3mySWzXMtcGn6Pco2zMd1bwAa8ePAH+IKuEFl7FblT0OvKSKaVpNVBLTtcT9s7pb67mPErpNzTxwPBcSRSPhkbJE9zJGEOa5pwWkciD1KzLZtx1TR0Yp6iGgrXtbhs80bg8/tbrgD6BBfWqr/SaastVdrgQI4Ge4wnjK/7LR3k/wB+pck1tc6unnrKmXelqC+SQB2MvcSSceJPl6LM1brG96uqmzXmq32M/NQRjdjj8G9vecnvWjEUhidKGOMbXBpfjgCc4Ge3gfQoMt0rOJDxnohgjt4/+KY7Jr/T2TXdBLUStbT1TDTSOJ4NLzwP+4Mz3eCgCIO3g073EEr2xxcPebhQzY/dLrdtDUc96ikbNGTFFNJ9aeIAbrz8xnr3c9amqAiIgIiICIiAiIgIiICIiAiIgIiICIvwroHVNLJCyV8TnDg9hwWlRtMxWZiN8vYiJni/dFGKa+1NunNJd4y4t4dK3njt7x3qRU1TDVRCWnkbIw9bSq+n1mLPwrO6Y5xPOGXLp74uM8uvk0OvNIUWs7G+31Z6KZp36aoAyYn9veDyI6/HBXMGq9F33SlS6O7UT2xA4bVRguhf4Ox8jg9y7CXx7WvaWvaHNIwQRkFWmFw6g4nAXZE2j9MTyGSbTtpe93EudRR5PjwWVb7BZrY7ettpoKR3xU9Mxh+QQc26I2UX/Uk8c1bBJbbbkF887C17x9xh4nxOB48lfMuz+wHR0ul4aboqN4z0g4ydL1Sl3W7IHlw5cFKkQcb6u0vctJ3eS3XSIgjjFM0e5M34mn8OpWnss2QiZsN61dAQzg+C3vH1ux0o7Pu+vYrwmpoJ3MdPBHI6N28wvYDuntGeRXt+9uncxvY4Z5ZQfWgNaGtAAAwAOpMjtWhqbLX1hJqrq7B+wyMhvplaq66edb6R1UypEjWEZBZunicdvetZm1uoxxN4w+GPWP44rmPT4bzFe84z6SmiLS6TfK+1kzPc/wDKkNLjnAwPxyt0runzd9irk3bt6vlx93eadBERZmMREQEREBERAREQEREBERAREQYVztsFxh3Jm4cPqSDm1Q+qpK+yVG817mA/VlZ9V3j/AGKnq8SxslYWSsa9juBa4ZBWu1uzqanx1ns3jzhb02rth8M8a9EYodVOADa6He+/Fz9Ct5S3agqsdFUs3vhcd0+hWouOlmOJfQSCM/q38R5HqUdq6CqoyRUwPYPiIy0+fJau2s2houGavar19/qvRp9JqeOOezPT2+ix0Vaw1VRAPyNRLGOxjyFlNvNyaMCsk88H+ay0+IMU/ipP+/RC2ycny2hYCKvzebk4YNZJ5YCxpaupl/O1Mzx2OkJS3xBh+Wk/t7vK7JyedoT6puVHS56epjaR9nOT6DitNWaribltHC6Q/HJ7o9Of8lHKOgqqw4poHvHxYw315KRW3S7GESV7xIf1bOXmetQprtoazhhp2Y6+8/1CVtNpNP8AmW3z0YNMy56hlxNK5tKD7xAw3wA6z4rY6qf0dFTUEIJdI4AN5kgcvnhSCONkTAyNoaxowGtGAFjGghdcBWv3nStbusB5M8O/ir33fauC1O1vtbnM9PRW+11nJFt26teUer7bKUUVBDT9bG+948z81lIi2dKRSsVryhStabTMz5iIik8EREBERAREQEREBERAREQEREBERAXwjIweSIgi2qqeCKPeihjY44yWsAKi+URcVtesRqZ3Q6XZszOHi+k8FK9L01PLAHyQRPcBkOcwEoi92NWJ1HGENpzMYuCStGBgcl9RF2jnRERAREQEREBERAREQEREH//Z' alt='' />
          <button>Save <Bookmark color="red" size={18} strokeWidth={1.5} /></button>
        </div>
        <div className='center'>
          <h3>Amazon <span>4 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        </div>
        <div className='bottom'>
          
            <div>
              <h3>$12/hr</h3>
              <p>UP, India</p>
            </div>
            <button>Apply Now</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
