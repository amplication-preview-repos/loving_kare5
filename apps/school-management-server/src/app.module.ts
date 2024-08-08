import { Module } from "@nestjs/common";
import { SchoolModule } from "./school/school.module";
import { TermModule } from "./term/term.module";
import { AcademicYearModule } from "./academicYear/academicYear.module";
import { HolidayModule } from "./holiday/holiday.module";
import { SectionModule } from "./section/section.module";
import { GradeModule } from "./grade/grade.module";
import { CalendarModule } from "./calendar/calendar.module";
import { SubjectModule } from "./subject/subject.module";
import { EventModule } from "./event/event.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    SchoolModule,
    TermModule,
    AcademicYearModule,
    HolidayModule,
    SectionModule,
    GradeModule,
    CalendarModule,
    SubjectModule,
    EventModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
