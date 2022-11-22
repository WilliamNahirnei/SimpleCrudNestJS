@ApiQuery({
    name: 'initialHour',
    required: false,
  })
  @ApiQuery({
    name: 'endHour',
    required: false,
  })
  @ApiQuery({
    name: 'page',
    required: false,
  })

  @Query('initialDate', new DefaultValuePipe(new Date().toISOString())) initialDate: string = new Date().toISOString(),


      // if (filters.endDate) {
    //   queryBuilder.where(
    //     new Brackets((qb) => {
    //       qb.andWhere('e.date <= :endDate');
    //     }),
    //     {
    //       endDate: filters.endDate,
    //     },
    //   );
    // }

        // queryBuilder.orderBy("e.date", "ASC")
