using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistance;

namespace Application
{
    public class List
    {
        public class Query : IRequest<List<Activity>> {

        }
        public class Handler : IRequestHandler<Query, List<Activity>>
        {
            private readonly DataContext _dataContext;

            public ILogger<List> _logger { get; }

            private readonly CancellationToken _cToken;

            public Handler(DataContext dataContext, ILogger<List> logger)
            {
                _dataContext = dataContext;
                _logger = logger;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                try
                {
                    for (var i = 0; i < 10;i++){
                        cancellationToken.ThrowIfCancellationRequested();
                        await Task.Delay(1000, cancellationToken);
                        _logger.LogInformation($"Task {i} is completed.");
                    }
                }
                catch (Exception e) when (e is TaskCanceledException)
                {
                    _logger.LogError($"Task is cancelled");
                    
                    throw;
                }
                return await _dataContext.Activities.ToListAsync();
            }
        }

    }
}