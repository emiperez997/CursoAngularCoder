# Clase 17 - Feature Store con NgRx

## Feature Store

- Es el concepto de crear un store individual para una funcionalidad concreta
- Al hacerlo en un feature, ese store se creará cuando se inicialice el componente principal de la feature
- La idea es crear un store individual para cada entidad o funcionalidad
- Se suele implementar en el marco profesional

## Práctica

- Existe un comando para crear un feature store

```bash
# Para que esto funcione hay que instalar algo extra
ng add @ngrx/schematics
ng add @ngrx/effects

ng g feature features/dashboard/enrollments/store/enrollments
```

- Nos van a realizar las siguientes preguntas

```bash
? Should we generate and wire success and failure actions? Yes
? What should be the prefix of the action, effect and reducer? load
? Should we use @ngrx/entity to create the reducer? No
? To which module (path) should the effect be registered in? enrollments.module.ts
```

- Luego de esto, debemos declarar en el `enrrolments.module.ts` la store, que esta almacenada en el reducer

```ts
@NgModule({
  declarations: [EnrollmentsComponent],
  imports: [
    CommonModule,
    EnrollmentsRoutingModule,
    // Versiones anteriores
    StoreModule.forFeature(enrollmentsFeature),
  ],
  exports: [EnrollmentsComponent],
  // Versiones nuevas
  providers: [provideState(enrollmentsFeature)],
})
export class EnrollmentsModule {}
```

- `provideState` cumple el mismo funcionamiento que `StoreModule.forFeature`

## Effects

- Un effect es un servicio
