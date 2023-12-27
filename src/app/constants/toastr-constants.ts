export class ToastrConstants {
  public static toastrSuccessMessage = {
    login: 'Login Successful!',
    signup: 'Registered Successfully!',
    newParty: 'New Party added Successfully!',
    newOrder: 'New Order added Successfully!',
    fileUpload: 'Order Image Uploaded Successfully!',
    partyDelete: 'Party Deleted Successfully!',
    orderDelete: 'Order Deleted Successfully!'
  }

  public static toastrFailureMessage = {
    login: 'Either User Email or Password is incorrect',
    signup: 'Unable to Register',
    newParty: 'Unable to add new party',
    newOrder: 'Unable to add new order',
    firebaseError: 'Unable to connect with firebase',
    fileUpload: 'Unable to Upload the Image to Store',
    partyDelete: 'Unable to delete the party',
    orderDelete: 'Unable to delete the order'
  }

  public static toastrWarningMessage = {
    authRequired: 'Access Denied, Login is Required to Access the Page!',
    partyDelete: 'Unable to Delete the Party, Party is associated with few orders! Delete the Orders before Party!'
  }
}
