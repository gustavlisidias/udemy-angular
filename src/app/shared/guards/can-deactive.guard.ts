import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from '@angular/router';
import { AccountGuardsComponent } from '../account-guards/account-guards.component';

export const canDeactiveGuard: CanDeactivateFn<AccountGuardsComponent> = (
  component: AccountGuardsComponent, 
  currentRoute: ActivatedRouteSnapshot, 
  currentState: RouterStateSnapshot, 
  nextState?: RouterStateSnapshot
  ) => {

  return component.voltar();
};
