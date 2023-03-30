import { Auth } from 'aws-amplify';

export default async function currentUser(setFullName: Function) {
    try {
      const attributes = await Auth.currentUserInfo(); 
      console.log("Current User Retrieved", attributes.attributes.name + " " + attributes.attributes.family_name)
      setFullName(attributes.attributes.name + " " + attributes.attributes.family_name)
    } catch (error) {
      console.log('error in retrieving current user', error)
    }
  }