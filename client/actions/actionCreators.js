// increment
export function login(email,password,id) {
  const nxtid =0;
  return {
    type: 'ADD_USER',
    email,
    password,
    id: nextid ++
    
    
  }
}

// add comment
export function addComment(email,password,id) {
  return {
    type: 'ADD_COMMENT',
    email,
    password,
    id
  }
}

// remove comment

export function deletecomment(Comment) {
  return {
    type: 'DELETE_COMMENT',
    comment
  }
}
