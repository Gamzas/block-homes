export const getDIDValue = (did: string) => {
  const didNum = did.split('did:klay:')[1]
  return didNum
}
