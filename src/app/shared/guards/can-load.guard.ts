import { CanMatchFn } from '@angular/router';

export const canLoadGuard: CanMatchFn = (route, segments) => {
  
  console.log(route);
  console.log(segments);

  if (segments[0].path === "dashboard-guards") {
    return true;
  }
  alert("Path errado, retornando para home page");
  return false;

};