import NextAuth from 'next-auth';
import Providers from 'next-auth/providers'

export default NextAuth({
    providers: [
        Providers.GitHub({
            clientId: 'cb62f10580336275e7fb',
            clientSecret: '2b05049bec8e7335801b75955ca8fe85db8421cb',
            scope: 'read: user'
        })
    ]
})